export const name="av1";
export const id="dl_458167e3e0f94eb884cc";
export const url=new URL("../icons/A/av1.svg?v=8f4cf89d449e686bf5032926aa813f9c675726c5a176fc7fea4b61c0cefcfec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
