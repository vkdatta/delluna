export const name="lucid_3-pen-off";
export const id="dl_f83169a6f4134d0cbf7a";
export const url=new URL("../icons/lucid_3-pen-off.svg?v=12e3ed0a055a1c0105ba7359935bd6e9fdfc975bd095ee1ab848b17897d6ade6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
