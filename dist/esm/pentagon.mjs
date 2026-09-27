export const name="pentagon";
export const id="dl_18539bb422854721aa98";
export const url=new URL("../icons/pentagon.svg?v=d89e91fa713a882b0ea6f1fa9c7131e191a65db99ff0c28dd34fbc57eae884c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
