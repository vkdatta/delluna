export const name="dropper_eye";
export const id="dl_8116f9162da0d0c4c506";
export const url=new URL("../icons/dropper_eye.svg?v=d5794d42792a8d2eb872076d82c29be53583420cb5ccd3ae565fc71d935fc05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
