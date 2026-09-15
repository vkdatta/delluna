export const name="cardiology";
export const id="dl_6588aa433068483a9aa6";
export const url=new URL("../icons/C/cardiology.svg?v=640baf9937d79c509ef5ae624c490a1861b11c7307e213f53b229f797050e021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
