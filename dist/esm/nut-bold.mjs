export const name="nut-bold";
export const id="dl_d7ea5618328a4a22a736";
export const url=new URL("../icons/nut-bold.svg?v=4c18b53d356db75d2c8b1033bd45424e0761571bc3434d256ff90164cbc3a70f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
