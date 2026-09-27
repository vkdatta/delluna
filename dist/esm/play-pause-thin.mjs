export const name="play-pause-thin";
export const id="dl_ad657dde3a47460f8603";
export const url=new URL("../icons/play-pause-thin.svg?v=75ffa9e034a8d9852537dc139d7b851a151d7caaba9c19cd528fbc3e931683ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
