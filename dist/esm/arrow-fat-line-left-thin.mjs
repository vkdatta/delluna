export const name="arrow-fat-line-left-thin";
export const id="dl_34d756bcebb1403c8c52";
export const url=new URL("../icons/arrow-fat-line-left-thin.svg?v=ce3e37c3181a0a3559b1a6e0774b9aa68724bb5eb9fa997b99404a0ff928eca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
