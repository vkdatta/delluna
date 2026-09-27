export const name="widget_medium";
export const id="dl_a425b1f3c3be2b0c996d";
export const url=new URL("../icons/widget_medium.svg?v=b9725e18cc65c3f4d23542ec7fad0d1e7e7279336820187174226a662cb0e297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
