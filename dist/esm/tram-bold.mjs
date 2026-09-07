export const name="tram-bold";
export const id="dl_5ed8ef0689544364804e";
export const url=new URL("../icons/T/tram-bold.svg?v=70c91e2620cf76aefd6d46e30b765b29ee8bc4b31ff08f3fa8eb48b9803abda0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
