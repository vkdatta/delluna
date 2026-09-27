export const name="link-simple-break-thin";
export const id="dl_3842667dbcbd412887ef";
export const url=new URL("../icons/link-simple-break-thin.svg?v=048c766f7da831f2b76cee87e698a981a50191482dc81a59460891cd9a33d970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
