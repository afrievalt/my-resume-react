
export const selectEmploymentDetails = ({employmentHistory_byId}, id) => {
    const {dates: subtitle, title: jobTitle, name, img, description, skills} = employmentHistory_byId[id] || {}
    const title = `${name} - ${jobTitle}`
    return {
      title,
      subtitle,
      img,
      description,
      skills
    }  
}