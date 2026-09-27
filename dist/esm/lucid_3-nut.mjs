export const name="lucid_3-nut";
export const id="dl_15afbf7964894214a0f0";
export const url=new URL("../icons/lucid_3-nut.svg?v=e741b43c6f6a4ef909b1663d7381e98f792beaf864676c4088f3f7ea64cd63a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
