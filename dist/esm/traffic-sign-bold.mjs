export const name="traffic-sign-bold";
export const id="dl_f96690d6291f4ca38606";
export const url=new URL("../icons/T/traffic-sign-bold.svg?v=28786f7bc42c5873a5240564c2014568dd5e673717b26a4be206069779bb2f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
