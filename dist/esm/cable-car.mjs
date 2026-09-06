export const name="cable-car";
export const id="dl_14a2b5b1917c48afb3a9";
export const url=new URL("../icons/cable-car.svg?v=a2bb374987043651b968bf10908a90c338a44e18276a30188214e69efd54c7a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
