export const name="speech_to_text_2";
export const id="dl_730d150b3e574184b842";
export const url=new URL("../icons/speech_to_text_2.svg?v=eebcd9e7aae6be35a37eb5232146422c6c7e2d140be10ad2d671052e775f9395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
