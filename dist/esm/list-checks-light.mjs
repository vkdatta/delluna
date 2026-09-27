export const name="list-checks-light";
export const id="dl_b5f3eef5bb8546b7acb9";
export const url=new URL("../icons/list-checks-light.svg?v=c7941bb4a3be9ec36fd04df741f5e3583cabcc55ffb00fc0648d8e22b75b171b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
