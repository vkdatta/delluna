export const name="slide";
export const id="dl_f9d8e0e33db347178a01";
export const url=new URL("../icons/slide.svg?v=ddc44edbb69f7ec383e758ca6e6dc2f4a1706846ba8cd504d37a5c8d17b0a2c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
