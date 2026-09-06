export const name="battery-vertical-full-bold";
export const id="dl_52bbdc0ae3144050a979";
export const url=new URL("../icons/battery-vertical-full-bold.svg?v=5cfe96eb1e846b5f50fb750f1843fc1a88e7e0f08f18dc802e0a2b7a8c382741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
