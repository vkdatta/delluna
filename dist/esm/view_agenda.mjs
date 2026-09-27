export const name="view_agenda";
export const id="dl_dee07cadfca1f727cb81";
export const url=new URL("../icons/view_agenda.svg?v=5ce76421acacda32dd5abd8931a5e390d999b84a54505621ef73bbccf9902f05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
