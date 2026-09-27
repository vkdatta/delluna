export const name="paint-roller-light";
export const id="dl_67d35997b16741d6b4ff";
export const url=new URL("../icons/paint-roller-light.svg?v=9554cd97bb4baba0103000d1428b4a1a4259dc3585756ca837e5b0ca37a88850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
