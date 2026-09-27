export const name="quiz";
export const id="dl_966d3c227125bdb70d43";
export const url=new URL("../icons/quiz.svg?v=7446a44da0b1accfe9648302b417b64cc8ba26280d2e2f9c5c67bce593f82105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
