export const name="chess_rook-fill";
export const id="dl_9c35d1d9275af6f8c278";
export const url=new URL("../icons/chess_rook-fill.svg?v=95d14966357ee765cd8010f5da77485924dd291d27b5f1a19ebe093f1d3c8a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
