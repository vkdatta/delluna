export const name="file-audio-thin";
export const id="dl_a29dd139a41f4b5cb4ae";
export const url=new URL("../icons/file-audio-thin.svg?v=ec37fad2749c062fb60792f7506d24d7cc94635ce1a547e7f67c1964afa15253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
