export const name="arrow-elbow-right-down";
export const id="dl_011717ec590a47b4b750";
export const url=new URL("../icons/arrow-elbow-right-down.svg?v=ea575a349f615359b558b7e8ea79b890ad028044d0afb42448f3ca46dceeb29c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
