export const name="pause_presentation-fill";
export const id="dl_8f3b9110587f62615ab5";
export const url=new URL("../icons/pause_presentation-fill.svg?v=1c11669977099cc0087006c92cea86c1c9c8eb029ae06481e79a0dcfdf882218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
