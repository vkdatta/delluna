export const name="chess_bishop";
export const id="dl_64d450c4241702542036";
export const url=new URL("../icons/chess_bishop.svg?v=a928ad03c8a2923f5acf0046116d3f04cc5762c2136cbc349c1a6d49cf71a384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
