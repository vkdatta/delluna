export const name="fiber_smart_record";
export const id="dl_f88b6a86105ecfedf4c3";
export const url=new URL("../icons/fiber_smart_record.svg?v=7f96ffc6bd4fbe10136864e31be61f96a2217eca9b3297a3144ec88304427af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
