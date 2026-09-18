export const name="view_week";
export const id="dl_2a040aea60e840d7ad95";
export const url=new URL("../icons/V/view_week.svg?v=e39809165ffd054dbeae358a7acd58f4f0027987cc66be4c5831f9cb29b796bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
