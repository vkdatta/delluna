export const name="arrow-elbow-up-left-duotone";
export const id="dl_35df16d18cf74764ac1a";
export const url=new URL("../icons/arrow-elbow-up-left-duotone.svg?v=89c0ca847c7fd22a262439e40b1261b9d6e8630ac6dd0c9d9fed7502aff86659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
