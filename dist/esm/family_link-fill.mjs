export const name="family_link-fill";
export const id="dl_5828342e13e3684d442f";
export const url=new URL("../icons/family_link-fill.svg?v=20cd2579394988aedc9f328f7c7e94e4537e93a3c38fad77c0f32be8d5307874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
