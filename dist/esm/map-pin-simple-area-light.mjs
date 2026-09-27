export const name="map-pin-simple-area-light";
export const id="dl_aae78cc342e748359170";
export const url=new URL("../icons/map-pin-simple-area-light.svg?v=1b68b9d50959b1db7526b6bd42c78b5bd5e11576b6963edca68efd713b80924d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
