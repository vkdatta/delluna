export const name="arrow-elbow-right-down-light";
export const id="dl_574cf7c990fe4631abc4";
export const url=new URL("../icons/arrow-elbow-right-down-light.svg?v=84c204dee7f7d61f119d2e7e7c2d5da1ce5ab148f401d26e61ba5b7ab0aef936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
