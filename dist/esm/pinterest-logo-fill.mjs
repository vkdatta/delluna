export const name="pinterest-logo-fill";
export const id="dl_74219866458345229d79";
export const url=new URL("../icons/pinterest-logo-fill.svg?v=53afc08223e930c45a68d7c34e16f915e78d4356ed9fa9f044894629de2f4d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
