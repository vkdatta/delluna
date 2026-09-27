export const name="wifi-x-fill";
export const id="dl_81823d67d726fe14406c";
export const url=new URL("../icons/wifi-x-fill.svg?v=f75f5dfda88f4cae9dbbe0bd42ab08f8ed176e6ad14f3dea2f1ef80923d8b7a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
