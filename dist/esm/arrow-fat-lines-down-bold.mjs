export const name="arrow-fat-lines-down-bold";
export const id="dl_fd490ae0349a4b5b8c3b";
export const url=new URL("../icons/arrow-fat-lines-down-bold.svg?v=c76c8605360cce515bba331a1ddc666afde909c17d014e7539e82f4759f74945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
