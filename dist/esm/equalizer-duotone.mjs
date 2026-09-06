export const name="equalizer-duotone";
export const id="dl_938ab762ed27419fbb30";
export const url=new URL("../icons/equalizer-duotone.svg?v=71d69e34748c8d8f437d7f8e07ea81189b1c0eafa7e151b3c8bffe413bc5d35e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
