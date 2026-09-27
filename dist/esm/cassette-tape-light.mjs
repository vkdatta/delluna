export const name="cassette-tape-light";
export const id="dl_396c04df83d14bc1baf9";
export const url=new URL("../icons/cassette-tape-light.svg?v=8fe4471f174a38f9c5c81b9833a51b6fd133bd3345612a5e67c4c23d84a14458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
