export const name="chats-teardrop-duotone";
export const id="dl_0cd0651b6d5b4500941e";
export const url=new URL("../icons/chats-teardrop-duotone.svg?v=d3bac15ee72f21690580e60c69e0a980010907edb7c1d547e0d30a5e622c98bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
