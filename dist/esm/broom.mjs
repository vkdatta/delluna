export const name="broom";
export const id="dl_647f8e11a520475baad9";
export const url=new URL("../icons/broom.svg?v=e0805212cc05dd85c80cad8a62684a6705b2a8329ced7c2363d74747d01c3fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
