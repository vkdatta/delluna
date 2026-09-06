export const name="pencil-circle-duotone";
export const id="dl_a59c2024b2b341349d4b";
export const url=new URL("../icons/pencil-circle-duotone.svg?v=85a6fc79f88bbc29167e5f32b400e2215d77f8a023368737883a18ded73a3640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
