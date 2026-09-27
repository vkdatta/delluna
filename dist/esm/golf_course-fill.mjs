export const name="golf_course-fill";
export const id="dl_7e21a132084db94e05d3";
export const url=new URL("../icons/golf_course-fill.svg?v=1837292a3b10c5b0b496695812c2a7e075a7b9209242742e3359290d5435771b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
