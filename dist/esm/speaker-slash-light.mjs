export const name="speaker-slash-light";
export const id="dl_5133b7ecf0db5a14529d";
export const url=new URL("../icons/speaker-slash-light.svg?v=48c0968162dc1f29caff863944bb1003daae2bd57b9be7afc8010eeef7372d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
