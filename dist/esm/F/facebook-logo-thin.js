export const name="facebook-logo-thin";
export const id="dl_f0ac26078e7c4594b636";
export const url=new URL("../../icons/F/facebook-logo-thin.svg?v=4a9d345d6e666244197ee40e008e2cb48c9df397529c640f17fe0c4a7d6c693f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
