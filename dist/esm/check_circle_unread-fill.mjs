export const name="check_circle_unread-fill";
export const id="dl_ab26b12c0872bada79d4";
export const url=new URL("../icons/check_circle_unread-fill.svg?v=e4325de6aaeb36657487f5b13c8b93a0cbc15e01989e32054540d11944eb08d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
