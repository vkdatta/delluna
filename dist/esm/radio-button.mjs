export const name="radio-button";
export const id="dl_fa32e6af89454f4ba3be";
export const url=new URL("../icons/radio-button.svg?v=d8edfd749c7e3c49b9c1b4dcebfc32af1cd2843ee1bf474c95b0f4d065ada6a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
