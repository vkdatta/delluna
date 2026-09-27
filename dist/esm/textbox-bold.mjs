export const name="textbox-bold";
export const id="dl_5d6cd77fcd683b03ffa2";
export const url=new URL("../icons/textbox-bold.svg?v=7107937ff567a6ccc36f9cc96243b5d49eebaa0147adbad65f0f5377028c2f05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
