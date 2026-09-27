export const name="puzzle-piece-bold";
export const id="dl_85447ea816b144a78646";
export const url=new URL("../icons/puzzle-piece-bold.svg?v=432c540c1b79a54404e39fef5d738ff23f7001295c251b4ca3b28b0251010e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
