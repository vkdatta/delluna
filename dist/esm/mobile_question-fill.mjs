export const name="mobile_question-fill";
export const id="dl_2411fb22b91c0e4c9f2d";
export const url=new URL("../icons/mobile_question-fill.svg?v=d69083814f1b2a7bd2490011533aed25a3291e5af663a674f919dc1ca24c601a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
