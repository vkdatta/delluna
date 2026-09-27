export const name="rocket-launch-light";
export const id="dl_530092c6a03449c3ab18";
export const url=new URL("../icons/rocket-launch-light.svg?v=b69cfbe746f4f797edada08ccdf171a65c6718e9d31dbc19bd4efdd43b2a0cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
