export const name="splitscreen-fill";
export const id="dl_b93b48e3f2c0c5b18554";
export const url=new URL("../icons/splitscreen-fill.svg?v=1dea4a8797e2c8e9e2cb89e19fe82a573b7ad20b84a8248b02ba064dedd90499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
