export const name="monitor-play-bold";
export const id="dl_044a2b6e24c446eda100";
export const url=new URL("../icons/monitor-play-bold.svg?v=57f5d292e998a1b31c704b0712ecd6c84685b5f123c45e2b54bcd6eaf5dd63cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
