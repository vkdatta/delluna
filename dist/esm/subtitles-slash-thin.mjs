export const name="subtitles-slash-thin";
export const id="dl_9d45e73cf1d3038c6b87";
export const url=new URL("../icons/subtitles-slash-thin.svg?v=80dcfac72d42c840d66062409d2f32c9d753e975a685408f54ff16c26c770d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
