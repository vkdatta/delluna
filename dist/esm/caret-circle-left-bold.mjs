export const name="caret-circle-left-bold";
export const id="dl_5948d870ec80479ab8fb";
export const url=new URL("../icons/caret-circle-left-bold.svg?v=ffb9e34a16e8ed0455b90b3ac26669b5b8bb272b2ee93fb700a5ab793b59a2c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
