export const name="videogame_asset_off";
export const id="dl_1bcca0f4cca911ce5ff9";
export const url=new URL("../icons/videogame_asset_off.svg?v=d85d37ff22a279fde3e59266622200fdf94a89ed4b36392451962a5e94294d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
