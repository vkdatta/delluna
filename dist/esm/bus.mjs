export const name="bus";
export const id="dl_52a1601de1f14d798d2e";
export const url=new URL("../icons/bus.svg?v=e94beb257f1741c4525ab8bbba01a3ccb7053c770f204bc0a9f288d5c986662a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
